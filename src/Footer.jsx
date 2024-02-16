const Footer = () => {
  const today = new Date();
  return (
    <footer className="Footer">
      <p>Marsketeer &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
