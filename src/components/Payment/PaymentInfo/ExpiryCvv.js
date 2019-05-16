import React from 'react';
import PaymentTextField from './PaymentTextField';
import Grid from '@material-ui/core/Grid';

export const ExpiryCvv = ({ expiry, onExpiryChange, cvv, onCvvChange }) => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={6}>
        <PaymentTextField
          value={expiry}
          label="Expiry date"
          placeholder={'mm/yy'}
          fullWidth={false}
          onChange={onExpiryChange}
        />
      </Grid>
      <Grid item xs={6}>
        <PaymentTextField
          value={cvv}
          label="CVV"
          placeholder={'3 digits on card'}
          fullWidth={false}
          type="number"
          onChange={onCvvChange}
        />
      </Grid>
    </Grid>
  );
};