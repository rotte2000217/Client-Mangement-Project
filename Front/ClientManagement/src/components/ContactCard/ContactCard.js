import './ContactCard.css';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import PersonIcon from '@material-ui/icons/Person';
import PaymentIcon from '@material-ui/icons/Payment';
import EmailIcon from '@material-ui/icons/Email';
import Card from '@material-ui/core/Card';

export default function ContactCard(props) {
  return (
    <Card className="main-card-container" onClick={() => props.openModal()}>
        <CardContent>
        <div className="contact-row contact-upper-row">
            <PersonIcon className="contact-icon" />
            <Typography>
                {props.name}
            </Typography>
        </div>
        <div className="contact-row">
            <PaymentIcon className="contact-icon" />
            <Typography>
                {props.document}
            </Typography>
        </div>
        </CardContent>
    </Card>
  );
}