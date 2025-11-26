export const normalizeTechList = (techData: unknown): string[] => {
  if (!techData) return [];

  if (Array.isArray(techData)) return techData.map(String);

  if (typeof techData === "string")
    return techData.split(",").map(t => t.trim()).filter(Boolean);

  if (typeof techData === "object")
    return Object.values(techData as Record<string, unknown>).map(String);

  return [];
};

export const categorizeTechnologies = (list: unknown = []): Record<string, string[]> => {
  const techs = normalizeTechList(list);

  const categories: Record<string, string[]> = {
    Frontend: [],
    Backend: [],
    CMS: [],
    Hosting: [],
    CDN: [],
    Analytics: [],
    Marketing: [],
    Security: [],
    Payments: [],
    Other: [],
  };

  techs.forEach((tech) => {
    const t = tech.toLowerCase();

    if (t.includes("react") || t.includes("vue") || t.includes("angular") || t.includes("next") || t.includes("nuxt") || t.includes("jquery") || t.includes("tailwind") || t.includes("bootstrap") || t.includes("svelte"))
      categories.Frontend.push(tech);

    else if (t.includes("node") || t.includes("python") || t.includes("php") || t.includes("ruby") || t.includes("java") || t.includes("express") || t.includes("django") || t.includes("laravel") || t.includes("rails"))
      categories.Backend.push(tech);

    else if (t.includes("wordpress") || t.includes("shopify") || t.includes("drupal") || t.includes("wix") || t.includes("squarespace") || t.includes("webflow") || t.includes("ghost") || t.includes("joomla"))
      categories.CMS.push(tech);

    else if (t.includes("cloudflare") || t.includes("vercel") || t.includes("aws") || t.includes("azure") || t.includes("netlify") || t.includes("heroku") || t.includes("digitalocean") || t.includes("google cloud") || t.includes("linode"))
      categories.Hosting.push(tech);

    else if (t.includes("cdn") || t.includes("fastly") || t.includes("akamai") || t.includes("cloudfront"))
      categories.CDN.push(tech);

    else if (t.includes("analytics") || t.includes("tag manager") || t.includes("ga4") || t.includes("gtm") || t.includes("hotjar") || t.includes("mixpanel") || t.includes("segment") || t.includes("plausible") || t.includes("heap"))
      categories.Analytics.push(tech);

    else if (t.includes("ads") || t.includes("pixel") || t.includes("marketing") || t.includes("hubspot") || t.includes("mailchimp") || t.includes("intercom") || t.includes("drift") || t.includes("marketo"))
      categories.Marketing.push(tech);

    else if (t.includes("ssl") || t.includes("security") || t.includes("captcha") || t.includes("auth") || t.includes("recaptcha") || t.includes("hcaptcha") || t.includes("okta"))
      categories.Security.push(tech);

    else if (t.includes("stripe") || t.includes("paypal") || t.includes("checkout") || t.includes("payment") || t.includes("square") || t.includes("braintree"))
      categories.Payments.push(tech);

    else
      categories.Other.push(tech);
  });

  return categories;
};

export const categorizeTech = (tech: string): string => {
  const t = tech.toLowerCase();
  
  if (t.includes("react") || t.includes("vue") || t.includes("angular") || t.includes("next") || t.includes("nuxt") || t.includes("jquery") || t.includes("tailwind") || t.includes("bootstrap") || t.includes("svelte"))
    return "Frontend";
  if (t.includes("node") || t.includes("python") || t.includes("php") || t.includes("ruby") || t.includes("java") || t.includes("express") || t.includes("django") || t.includes("laravel") || t.includes("rails"))
    return "Backend";
  if (t.includes("wordpress") || t.includes("shopify") || t.includes("drupal") || t.includes("wix") || t.includes("squarespace") || t.includes("webflow") || t.includes("ghost") || t.includes("joomla"))
    return "CMS";
  if (t.includes("cloudflare") || t.includes("vercel") || t.includes("aws") || t.includes("azure") || t.includes("netlify") || t.includes("heroku") || t.includes("digitalocean") || t.includes("google cloud") || t.includes("linode"))
    return "Hosting";
  if (t.includes("cdn") || t.includes("fastly") || t.includes("akamai") || t.includes("cloudfront"))
    return "CDN";
  if (t.includes("analytics") || t.includes("tag manager") || t.includes("ga4") || t.includes("gtm") || t.includes("hotjar") || t.includes("mixpanel") || t.includes("segment") || t.includes("plausible") || t.includes("heap"))
    return "Analytics";
  if (t.includes("ads") || t.includes("pixel") || t.includes("marketing") || t.includes("hubspot") || t.includes("mailchimp") || t.includes("intercom") || t.includes("drift") || t.includes("marketo"))
    return "Marketing";
  if (t.includes("ssl") || t.includes("security") || t.includes("captcha") || t.includes("auth") || t.includes("recaptcha") || t.includes("hcaptcha") || t.includes("okta"))
    return "Security";
  if (t.includes("stripe") || t.includes("paypal") || t.includes("checkout") || t.includes("payment") || t.includes("square") || t.includes("braintree"))
    return "Payments";
  return "Other";
};
