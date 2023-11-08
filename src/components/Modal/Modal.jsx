export const Modal = ({ isOpen, onClose, showCloseButton, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '1em',
        borderRadius: '10px',
        width: '80%',
        maxWidth: '400px',
      }}>
        {children}
        <br />
        {showCloseButton && <button onClick={onClose}>Cerrar</button>}
      </div>
    </div>
  );
};
