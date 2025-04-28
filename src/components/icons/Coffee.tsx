import type { SVGProps } from "react";
const SvgCoffee = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"  
    stroke="currentcolor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="coffee_svg__lucide coffee_svg__lucide-coffee-icon coffee_svg__lucide-coffee"
    {...props}
  >
    <path d="M10 2v2M14 2v2M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2" />
  </svg>
);
export default SvgCoffee;
