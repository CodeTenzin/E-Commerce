interface Props {
  onSubmit: (link: string) => void;
}

const Navigation = ({ onSubmit }: Props) => {
  const navItems = ["Home", "Menu", "Location", "Blog", "Order Online"];

  return (
    <>
      <form className="d-flex justify-content-evenly">
        {navItems.map((navItem) => (
          <a
            key={navItem}
            onClick={() => onSubmit(navItem)}
            className="text-decoration-none"
            href="#"
          >
            {navItem}
          </a>
        ))}
      </form>
    </>
  );
};

export default Navigation;
