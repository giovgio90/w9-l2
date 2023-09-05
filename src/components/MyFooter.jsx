const MyFooter = (props) => {
  return (
    <footer className={props.className}>
      <div className={props.container}>
        <p className={props.footerStyle}>&copy; 2023 Il Tuo Negozio. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default MyFooter;
