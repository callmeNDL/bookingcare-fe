import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import { useNavigate } from 'react-router-dom';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function ModalBooking() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleNavigate = () => {
    navigate('/doctor')
  }
  return (
    <div>
      <button className="button" onClick={handleClickOpen}> Đặt khám ngay</button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className='modal-booking' onClick={handleNavigate}>
            <div className='modal-booking__title'>Đặt khám</div>
            <div className='modal-booking__content'>
              <img className="img-item img-fluid" src="https://res.cloudinary.com/nguyen-duc-long/image/upload/v1659798776/img-booking_mqdip3.png" alt='img-booking' />
              <div className='modal-booking__content__title'>Đặt khám với bác sĩ</div>
              <div className='modal-booking__content__info'>Kết nối với các bác sĩ chuyên kho đầu ngành</div>
            </div>
            <div className='modal-booking__footer'>
              <div className='text-description'>
                <span>hoặc</span>
              </div>
              <div className='text-hotline'>
                <PermPhoneMsgOutlinedIcon className='icon' /> Liên hệ hotline: <span className='phone'>0328290432</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  )
}

export default ModalBooking