import { connect } from "react-redux";

const Notification = (props) => {

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const notificationComponent = () => (
    <div style={style}>
      {props.notification}
    </div>
  )

  return (
    <>
      {props.notification !== null && notificationComponent()}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}



const ConnectedNotifications = connect(mapStateToProps)(Notification)

export default ConnectedNotifications