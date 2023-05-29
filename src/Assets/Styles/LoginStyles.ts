import { makeStyles } from '@mui/styles';

export const useLoginStyles = makeStyles({
  wrapper: {
    padding: 16,
  },
  container: {
    background: 'white',
    padding: '30px 30px 20px 30px',
    borderRadius: '1rem',
    maxWidth: 500,
    margin: '100px auto',
    boxShadow: '0 15px 25px rgb(128,128,128,0.6)',
  },
  inputContainer: {
    width: '100%',
    margin: '16px 0',
    display: 'flex',
    flexDirection: 'column',
  },
  formsLabel: {
    fontSize: '1.125rem',
    marginBottom: '8px',
    color: 'grey',
  },
  formInput: {
    padding: '10px 16px',
    borderRadius: '4px',
    border: '1px solid #DAE6E0',
    boxShadow: '0px 4px 4px rgba(212, 221, 216, 0.16)',
  },
  button: {
    backgroundColor: '#4B0082',
    color: 'white',
    padding: '14px 20px',
    margin: '18px 0',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  },
});
