import CurrencyConversionForm from "./CurrencyConversionForm";
import DonationOptions from "./DonationOptions";
import PaymentMethods from "./PaymentMethods";
import PaymentOptions from "./PaymentOptions";
import UserInfoForm from "./UserInfoForm";

const DonateController = ({ activeStep }) => {
  switch (activeStep) {
    case 0:
      return <DonationOptions />;
    case 1:
      return (
        <PaymentOptions>
          <CurrencyConversionForm />
        </PaymentOptions>
      );
    case 2:
      return (
        <PaymentOptions>
          <UserInfoForm />
        </PaymentOptions>
      );
    case 3:
      return <PaymentMethods />;

    default:
      return null;
  }
};
export default DonateController;
