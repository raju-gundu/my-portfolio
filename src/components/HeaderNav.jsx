export default function HeaderNav({ children,...props }) {
  return (
    <a {...props}>
      {children}
    </a>
  );
}
