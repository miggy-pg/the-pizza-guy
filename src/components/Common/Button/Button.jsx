export default function Button({ children, disabled, type }) {
  const styles = {
    primary:
      "btn mt-2 bg-orange-400 py-2 transition-all duration-300 hover:bg-orange-300",
  };

  return (
    <div className={styles[type]} disabled={disabled}>
      {children}
    </div>
  );
}
