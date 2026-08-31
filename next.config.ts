import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/interior-painting",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/roof-cleaning",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/driveway-cleaning",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/patio-cleaning",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/gutter-cleaning",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/areas-we-cover",
        destination: "/",
        permanent: true,
      },
      {
        source: "/roof-cleaning-blessington",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/roof-cleaning-clane",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/roof-cleaning-clondalkin",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/roof-cleaning-cost-dublin",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/roof-cleaning-naas",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/roof-cleaning-newbridge",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/roof-cleaning-tallaght",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/roof-cleaning-templeogue",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/roof-cleaning-terenure",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/roof-moss-removal-dublin",
        destination: "/solutions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;