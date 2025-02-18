import React from "react";

type IconProps = {
  icon: React.ElementType; 
  position?: "prefix" | "suffix";
  iconClassName?: string;
  onlyIcon?: boolean;
};

type Props = {
  text?: string;
  className?: string;
  icons?: IconProps;
};

/* -----------@props---------------
  text: button text ;
  className: custom class names and custom css 
  icons: {   
    icon: icon to be shown;
    position: position (prefix or suffix)
    iconClassName: custom class names and custom css
    onlyIcon: a boolean value
  } 
*/

export const CustomButton: React.FC<Props> = ({ text, className = "", icons, ...rest }) => {
  const { icon: Icon, position = "prefix", iconClassName = "", onlyIcon = false } = icons || {};

  return (
    <button 
      className={`${onlyIcon ? "p-2 rounded-full" : "rounded-md"} ${className} transition-colors`} 
      {...rest}
    >
      {Icon && position === "prefix" && <Icon className={`w-5 h-5 ${iconClassName}`} />}
      {!onlyIcon && text}
      {Icon && position === "suffix" && <Icon className={`w-5 h-5 ${iconClassName}`} />}
    </button>
  );
};
