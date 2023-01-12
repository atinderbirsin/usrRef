function Button({
  primary,
  secondary,
  warn,
  danger,
  outline,
  rounded,
  children,
  ...rest
}) {
  let btnClasses = `px-3 py-1.5 text-white flex items-center gap-1 active:translate-y-1 transition duration-200 ease-in-out `;

  btnClasses += primary
    ? "bg-blue-500"
    : secondary
    ? "bg-green-500"
    : warn
    ? "bg-yellow-500"
    : danger
    ? "bg-red-500"
    : "";

  btnClasses += rounded ? " rounded " : "";

  btnClasses +=
    primary && outline
      ? "bg-transparent text-blue-500 outline outline-blue-500"
      : secondary && outline
      ? "bg-transparent text-green-500 outline outline-green-500"
      : warn && outline
      ? "bg-transparent text-yellow-500 outline outline-yellow-500"
      : danger && outline
      ? "bg-transparent text-red-500 outline outline-red-500"
      : "";

  return (
    <button {...rest} className={`${btnClasses} ${rest.className}`}>
      {children}
    </button>
  );
}

export default Button;