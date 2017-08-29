const K_SIZE = 35;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  border: '5px solid #f44336',
  borderRadius: K_SIZE,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 11,
  fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer',
  zIndex: -1
};

const greatPlaceStyleHover = {
  ...greatPlaceStyle,
  border: '5px solid #3f51b5',
  color: '#f44336',
  zIndex: 10000
};

const tooltipStyle = {
  position: 'absolute',
  width: '250px',
  height: 'relative',
  padding: '2px',
  fontSize: '14px',
  backgroundColor: 'lightsteelblue',
  border: '0px',
  borderRadius: '8px',
  pointerEvents: 'none',
  bottom: '125%',
  color: '#FFFFFF',
  zIndex: '5000'
};

export { greatPlaceStyle, greatPlaceStyleHover, tooltipStyle, K_SIZE };
