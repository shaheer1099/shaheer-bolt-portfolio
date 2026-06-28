import { Code2 } from 'lucide-react';

type BrandLogoProps = {
  name: string;
  className?: string;
  showLabel?: boolean;
};

const svg = (body: string, viewBox = '0 0 64 64') => {
  const normalized = body.replace(/%23/g, '#');
  return `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">${normalized}</svg>`)}`;
};

const logoMap: Record<string, { bg: string; src: string }> = {
  Shopify: {
    bg: 'bg-[#95bf47]/10',
    src: svg('<path fill="%2395BF47" d="M45 16l-7-1c-1-5-3-8-7-8-5 0-9 4-11 10l-7 2-3 36 39 6 6-39-10-6z"/><path fill="%235E8E3E" d="M31 11c2 0 3 2 4 4l-10 2c2-4 4-6 6-6z"/><path fill="%23fff" d="M36 30c-2-1-4-2-6-2-2 0-3 1-3 2 0 5 11 3 11 12 0 6-4 10-11 10-4 0-7-1-10-4l3-6c2 2 5 4 8 4 2 0 4-1 4-3 0-5-11-3-11-12 0-5 4-9 10-9 3 0 6 1 8 2l-3 6z"/>'),
  },
  WooCommerce: {
    bg: 'bg-[#96588a]/10',
    src: svg('<rect width="64" height="42" y="11" rx="12" fill="%2396588A"/><path fill="%23fff" d="M11 25h5l2 12 4-12h5l4 12 2-12h5l-5 20h-5l-4-12-4 12h-5L11 25zm29 0h13v5h-8v3h7v5h-7v7h-5V25z"/>'),
  },
  WordPress: {
    bg: 'bg-[#21759b]/10',
    src: svg('<circle cx="32" cy="32" r="29" fill="%2321759B"/><circle cx="32" cy="32" r="24" fill="none" stroke="%23fff" stroke-width="3"/><text x="32" y="43" text-anchor="middle" font-family="Georgia,serif" font-size="31" font-weight="700" fill="%23fff">W</text>'),
  },
  React: {
    bg: 'bg-[#61dafb]/10',
    src: svg('<circle cx="32" cy="32" r="5" fill="%2361DAFB"/><g fill="none" stroke="%2361DAFB" stroke-width="3"><ellipse cx="32" cy="32" rx="25" ry="10"/><ellipse cx="32" cy="32" rx="25" ry="10" transform="rotate(60 32 32)"/><ellipse cx="32" cy="32" rx="25" ry="10" transform="rotate(120 32 32)"/></g>'),
  },
  'React.js': {
    bg: 'bg-[#61dafb]/10',
    src: svg('<circle cx="32" cy="32" r="5" fill="%2361DAFB"/><g fill="none" stroke="%2361DAFB" stroke-width="3"><ellipse cx="32" cy="32" rx="25" ry="10"/><ellipse cx="32" cy="32" rx="25" ry="10" transform="rotate(60 32 32)"/><ellipse cx="32" cy="32" rx="25" ry="10" transform="rotate(120 32 32)"/></g>'),
  },
  'Next.js': {
    bg: 'bg-white/10',
    src: svg('<circle cx="32" cy="32" r="28" fill="%23000"/><path fill="%23fff" d="M20 45V19h6l19 26h-7L26 29v16h-6z"/><path stroke="%23fff" stroke-width="4" d="M43 19v26"/>'),
  },
  'Tailwind CSS': {
    bg: 'bg-[#38bdf8]/10',
    src: svg('<path fill="%2338BDF8" d="M16 27c4-8 9-12 17-12 12 0 14 9 20 10 4 1 7-1 9-4-4 8-9 12-17 12-12 0-14-9-20-10-4-1-7 1-9 4zm-14 16c4-8 9-12 17-12 12 0 14 9 20 10 4 1 7-1 9-4-4 8-9 12-17 12-12 0-14-9-20-10-4-1-7 1-9 4z"/>'),
  },
  TypeScript: {
    bg: 'bg-[#3178c6]/10',
    src: svg('<rect width="56" height="56" x="4" y="4" rx="7" fill="%233178C6"/><path fill="%23fff" d="M15 20h27v6h-10v27h-7V26H15v-6zm29 31c-3 0-6-1-8-3l3-5c2 2 4 3 6 3s3-1 3-2c0-4-11-2-11-11 0-5 4-8 10-8 3 0 6 1 8 3l-3 5c-2-1-3-2-5-2s-3 1-3 2c0 4 11 2 11 11 0 4-3 7-11 7z"/>'),
  },
  'Node.js': {
    bg: 'bg-[#5fa04e]/10',
    src: svg('<path fill="%235FA04E" d="M32 4l25 14v28L32 60 7 46V18L32 4z"/><path fill="%23fff" d="M20 44V22h6l12 13V22h6v22h-6L26 31v13h-6z"/>'),
  },
  PHP: {
    bg: 'bg-[#777bb4]/10',
    src: svg('<ellipse cx="32" cy="32" rx="30" ry="18" fill="%23777BB4"/><text x="32" y="39" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" font-weight="900" fill="%23fff">php</text>'),
  },
  Laravel: {
    bg: 'bg-[#ff2d20]/10',
    src: svg('<path fill="none" stroke="%23FF2D20" stroke-width="5" stroke-linejoin="round" d="M12 17l20-11 20 11v23L32 58 12 40V17zm20-11v24m20-13L32 30 12 17m0 23l20-10 20 10M32 58V30"/>'),
  },
  Express: {
    bg: 'bg-white/10',
    src: svg('<text x="32" y="37" text-anchor="middle" font-family="Arial,sans-serif" font-size="16" font-weight="800" fill="%23fff">express</text><path stroke="%23fff" stroke-width="3" d="M13 44l38-24M51 44L13 20"/>'),
  },
  MySQL: {
    bg: 'bg-[#f29111]/10',
    src: svg('<path fill="%2300758F" d="M9 42c9-20 31-28 46-17-14 1-24 10-30 23-7 0-12-2-16-6z"/><path fill="%23F29111" d="M49 20c3-2 7-3 11-2-2 3-5 6-9 7 0-2-1-3-2-5z"/><text x="32" y="54" text-anchor="middle" font-family="Arial,sans-serif" font-size="12" font-weight="900" fill="%23fff">MySQL</text>'),
  },
  PostgreSQL: {
    bg: 'bg-[#336791]/10',
    src: svg('<path fill="%23336791" d="M18 18c4-7 20-9 29-2 9 8 6 30-5 34-7 3-12-1-14-6l-7 9-6-4 8-10c-6-3-9-13-5-21z"/><circle cx="40" cy="25" r="3" fill="%23fff"/><path fill="none" stroke="%23fff" stroke-width="3" d="M28 43c0-9 4-13 14-15"/>'),
  },
  Redis: {
    bg: 'bg-[#dc382d]/10',
    src: svg('<path fill="%23DC382D" d="M32 8l25 12-25 12L7 20 32 8z"/><path fill="%23A41E11" d="M7 29l25 12 25-12v8L32 49 7 37v-8z"/><path fill="%23DC382D" d="M7 39l25 12 25-12v7L32 58 7 46v-7z"/><circle cx="31" cy="20" r="5" fill="%23fff"/>'),
  },
  REST: {
    bg: 'bg-cyan-400/10',
    src: svg('<rect x="9" y="15" width="46" height="34" rx="7" fill="%2306B6D4"/><path fill="%23fff" d="M18 27h28v5H18v-5zm0 10h18v5H18v-5z"/>'),
  },
  GraphQL: {
    bg: 'bg-[#e10098]/10',
    src: svg('<g fill="none" stroke="%23E10098" stroke-width="4"><path d="M32 8l21 12v24L32 56 11 44V20L32 8z"/><path d="M11 20l42 24M53 20L11 44M32 8v48"/></g><g fill="%23E10098"><circle cx="32" cy="8" r="4"/><circle cx="53" cy="20" r="4"/><circle cx="53" cy="44" r="4"/><circle cx="32" cy="56" r="4"/><circle cx="11" cy="44" r="4"/><circle cx="11" cy="20" r="4"/></g>'),
  },
  'Shopify GraphQL Admin API': {
    bg: 'bg-[#95bf47]/10',
    src: svg('<path fill="%2395BF47" d="M45 16l-7-1c-1-5-3-8-7-8-5 0-9 4-11 10l-7 2-3 36 39 6 6-39-10-6z"/><text x="32" y="44" text-anchor="middle" font-family="Arial,sans-serif" font-size="15" font-weight="900" fill="%23fff">GQL</text>'),
  },
  Webhooks: {
    bg: 'bg-sky-400/10',
    src: svg('<path fill="none" stroke="%2338BDF8" stroke-width="5" stroke-linecap="round" d="M24 18a12 12 0 0118 14l8 8M14 44a12 12 0 0118-14l8-8M44 50a12 12 0 01-14-18l-10-2"/>'),
  },
  Stripe: {
    bg: 'bg-[#635bff]/10',
    src: svg('<rect width="58" height="34" x="3" y="15" rx="9" fill="%23635BFF"/><text x="32" y="38" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" font-weight="900" fill="%23fff">stripe</text>'),
  },
  'Authorize.net': {
    bg: 'bg-[#00a0df]/10',
    src: svg('<rect width="58" height="34" x="3" y="15" rx="9" fill="%2300A0DF"/><text x="32" y="38" text-anchor="middle" font-family="Arial,sans-serif" font-size="12" font-weight="900" fill="%23fff">Authorize</text>'),
  },
  PayPal: {
    bg: 'bg-[#009cde]/10',
    src: svg('<path fill="%23003087" d="M21 9h17c8 0 13 5 11 13-2 11-10 16-21 16h-4l-3 17H11l10-46z"/><path fill="%230096D6" d="M27 20h17c8 0 12 5 10 13-2 10-10 15-20 15h-5l-2 9H17l10-37z"/><path fill="%23fff" d="M30 28h8c4 0 6 2 5 5-1 4-4 6-8 6h-7l2-11z"/>'),
  },
  MyFatoorah: {
    bg: 'bg-emerald-400/10',
    src: svg('<rect width="56" height="56" x="4" y="4" rx="14" fill="%2310B981"/><text x="32" y="39" text-anchor="middle" font-family="Arial,sans-serif" font-size="20" font-weight="900" fill="%23fff">MF</text>'),
  },
  Git: {
    bg: 'bg-[#f05032]/10',
    src: svg('<rect x="13" y="13" width="38" height="38" rx="5" fill="%23F05032" transform="rotate(45 32 32)"/><path fill="none" stroke="%23fff" stroke-width="4" stroke-linecap="round" d="M25 20v18m0-9h13m0-9v18"/><circle cx="25" cy="20" r="4" fill="%23fff"/><circle cx="25" cy="38" r="4" fill="%23fff"/><circle cx="38" cy="29" r="4" fill="%23fff"/>'),
  },
  cPanel: {
    bg: 'bg-[#ff6c2c]/10',
    src: svg('<rect width="56" height="56" x="4" y="4" rx="14" fill="%23FF6C2C"/><text x="32" y="39" text-anchor="middle" font-family="Arial,sans-serif" font-size="17" font-weight="900" fill="%23fff">cP</text>'),
  },
  BullMQ: {
    bg: 'bg-red-400/10',
    src: svg('<circle cx="32" cy="32" r="26" fill="%23EF4444"/><text x="32" y="38" text-anchor="middle" font-family="Arial,sans-serif" font-size="13" font-weight="900" fill="%23fff">Bull</text>'),
  },
  JWT: {
    bg: 'bg-pink-400/10',
    src: svg('<rect width="56" height="56" x="4" y="4" rx="12" fill="%23000"/><path stroke="%23fff" stroke-width="4" d="M32 12v40M12 32h40M18 18l28 28M46 18L18 46"/>'),
  },
  OAuth: {
    bg: 'bg-violet-400/10',
    src: svg('<rect width="56" height="56" x="4" y="4" rx="14" fill="%238B5CF6"/><path fill="none" stroke="%23fff" stroke-width="5" d="M22 30a10 10 0 1120 0v7H22v-7z"/><rect x="18" y="34" width="28" height="16" rx="4" fill="%23fff"/><circle cx="32" cy="42" r="3" fill="%238B5CF6"/>'),
  },
  Sequelize: {
    bg: 'bg-[#52b0e7]/10',
    src: svg('<path fill="%2352B0E7" d="M32 5l24 14v26L32 59 8 45V19L32 5z"/><path fill="none" stroke="%23fff" stroke-width="4" d="M20 25l12-7 12 7v14l-12 7-12-7V25z"/>'),
  },
  'Adobe Sign': {
    bg: 'bg-[#fa0f00]/10',
    src: svg('<rect width="56" height="56" x="4" y="4" rx="12" fill="%23FA0F00"/><path fill="%23fff" d="M20 48h-7L28 16h8l15 32h-8l-3-7H23l-3 7zm6-14h11l-6-13-5 13z"/>'),
  },
  'Zoom SDK': {
    bg: 'bg-[#2d8cff]/10',
    src: svg('<rect width="56" height="56" x="4" y="4" rx="14" fill="%232D8CFF"/><rect x="16" y="23" width="24" height="18" rx="4" fill="%23fff"/><path fill="%23fff" d="M40 28l10-6v20l-10-6V28z"/>'),
  },
  'Shopify App Store': {
    bg: 'bg-[#95bf47]/10',
    src: svg('<path fill="%2395BF47" d="M45 16l-7-1c-1-5-3-8-7-8-5 0-9 4-11 10l-7 2-3 36 39 6 6-39-10-6z"/><path fill="%23fff" d="M22 36h20v5H22zM22 27h20v5H22z"/>'),
  },
  'WooCommerce Marketplace': {
    bg: 'bg-[#96588a]/10',
    src: svg('<rect width="64" height="42" y="11" rx="12" fill="%2396588A"/><text x="32" y="38" text-anchor="middle" font-family="Arial,sans-serif" font-size="14" font-weight="900" fill="%23fff">Woo</text>'),
  },
  Email: {
    bg: 'bg-cyan-400/10',
    src: svg('<rect width="54" height="40" x="5" y="12" rx="8" fill="%2306B6D4"/><path fill="none" stroke="%23fff" stroke-width="4" d="M8 17l24 18 24-18"/>'),
  },
  LinkedIn: {
    bg: 'bg-[#0a66c2]/10',
    src: svg('<rect width="56" height="56" x="4" y="4" rx="10" fill="%230A66C2"/><path fill="%23fff" d="M18 27h8v24h-8V27zm4-11a5 5 0 110 10 5 5 0 010-10zm11 11h8v3c2-3 5-4 9-4 6 0 10 4 10 12v13h-8V39c0-4-2-6-5-6s-5 2-5 6v12h-9V27z"/>'),
  },
  Fiverr: {
    bg: 'bg-[#1dbf73]/10',
    src: svg('<circle cx="32" cy="32" r="28" fill="%231DBF73"/><text x="32" y="43" text-anchor="middle" font-family="Arial,sans-serif" font-size="27" font-weight="900" fill="%23fff">fi</text>'),
  },
  Upwork: {
    bg: 'bg-[#14a800]/10',
    src: svg('<rect width="56" height="56" x="4" y="4" rx="14" fill="%2314A800"/><text x="32" y="40" text-anchor="middle" font-family="Arial,sans-serif" font-size="20" font-weight="900" fill="%23fff">up</text>'),
  },
};

const wordmarkMap: Record<string, string> = {
  Shopify: svg(
    '<path fill="%2395BF47" d="M27 13l-5-.7C21.2 8.5 19 6 16 6c-3.8 0-6.8 3-8.5 7.7L3 15 1 45l32 5 4-32-10-5z"/><path fill="%235E8E3E" d="M16 9c1.4 0 2.3 1.5 2.8 3.2l-7 1.2C13 10.7 14.5 9 16 9z"/><path fill="%23fff" d="M20.6 24c-1.6-.9-3-1.3-4.6-1.3-1.8 0-2.7.7-2.7 1.7 0 3.8 8.4 2.4 8.4 9.2 0 4.6-3.4 7.7-8.8 7.7-3 0-5.8-1-7.8-2.7l2.3-4.8c1.5 1.5 3.7 2.7 5.8 2.7 1.8 0 2.9-.8 2.9-2 0-3.9-8.5-2.5-8.5-9.1 0-4.2 3.3-7.3 8.1-7.3 2.7 0 5.2.8 7.1 2.1L20.6 24z"/><text x="51" y="38" font-family="Arial,sans-serif" font-size="26" font-weight="900" fill="%23F8FAFC">Shopify</text>',
    '0 0 190 60',
  ),
  WordPress: svg(
    '<circle cx="30" cy="30" r="26" fill="%2321759B"/><circle cx="30" cy="30" r="22" fill="none" stroke="%23fff" stroke-width="3"/><text x="30" y="41" text-anchor="middle" font-family="Georgia,serif" font-size="29" font-weight="700" fill="%23fff">W</text><text x="69" y="38" font-family="Arial,sans-serif" font-size="24" font-weight="900" fill="%23F8FAFC">WordPress</text>',
    '0 0 230 60',
  ),
  React: svg(
    '<circle cx="31" cy="30" r="5" fill="%2361DAFB"/><g fill="none" stroke="%2361DAFB" stroke-width="3"><ellipse cx="31" cy="30" rx="25" ry="10"/><ellipse cx="31" cy="30" rx="25" ry="10" transform="rotate(60 31 30)"/><ellipse cx="31" cy="30" rx="25" ry="10" transform="rotate(120 31 30)"/></g><text x="70" y="39" font-family="Arial,sans-serif" font-size="26" font-weight="900" fill="%23F8FAFC">React</text>',
    '0 0 170 60',
  ),
  'Node.js': svg(
    '<path fill="%235FA04E" d="M31 4l25 14v28L31 60 6 46V18L31 4z"/><path fill="%23fff" d="M19 44V21h6l13 14V21h6v23h-6L25 30v14h-6z"/><text x="72" y="39" font-family="Arial,sans-serif" font-size="26" font-weight="900" fill="%23F8FAFC">Node.js</text>',
    '0 0 185 64',
  ),
};

export function BrandLogo({ name, className = '', showLabel = false }: BrandLogoProps) {
  const logo = logoMap[name];

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 ${logo?.bg ?? 'bg-accent/10'}`}
      >
        {logo ? (
          <img src={logo.src} alt={`${name} logo`} loading="lazy" className="h-6 w-6 object-contain" />
        ) : (
          <Code2 className="h-5 w-5 text-accent" />
        )}
      </span>
      {showLabel && <span className="text-sm font-semibold text-gray-200">{name}</span>}
    </span>
  );
}

function BrandWordmark({ name }: { name: string }) {
  const src = wordmarkMap[name] ?? logoMap[name]?.src;

  return (
    <img
      src={src}
      alt={`${name} logo`}
      loading="lazy"
      className="h-11 w-auto max-w-none object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
    />
  );
}

export function LogoMarquee({ className = '' }: { className?: string }) {
  const logos = ['Shopify', 'WordPress', 'React', 'Node.js'];
  const track = [...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className={`relative w-full overflow-hidden border-y border-white/10 bg-white/[0.025] py-4 backdrop-blur-xl ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#06080d] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#06080d] to-transparent" />
      <div className="brand-marquee-track flex w-max items-center gap-12 px-6">
        {track.map((logo, index) => (
          <span
            key={`${logo}-${index}`}
            className="group inline-flex h-14 min-w-[190px] items-center justify-center"
          >
            <BrandWordmark name={logo} />
          </span>
        ))}
      </div>
    </div>
  );
}
