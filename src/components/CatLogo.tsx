interface CatLogoProps {
  className?: string;
}

export function CatLogo({ className = 'w-8 h-8' }: CatLogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="10"
        className="stroke-[#B58E3E]/45 dark:stroke-[#D4B05D]/45"
        strokeWidth="1.2"
      />
      <path
        d="M11 29.5V17.5L9.5 10.5L15.2 14.2C16.7 13.6 18.3 13.3 20 13.3C21.7 13.3 23.3 13.6 24.8 14.2L30.5 10.5L29 17.5V29.5"
        className="stroke-current"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.8 21.5C15.5 20.8 16.7 20.8 17.4 21.5"
        className="stroke-[#4A6B57] dark:stroke-[#7BA38A]"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M22.6 21.5C23.3 20.8 24.5 20.8 25.2 21.5"
        className="stroke-[#4A6B57] dark:stroke-[#7BA38A]"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M18.8 24.8L20 26L21.2 24.8"
        className="stroke-[#B58E3E] dark:stroke-[#D4B05D]"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.2 28.2C18.3 29.1 21.7 29.1 22.8 28.2"
        className="stroke-current"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
