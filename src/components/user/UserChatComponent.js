import "../../chats.css"
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
const UserChatComponent = () => {
    return (
        <>
            <input type={"checkbox"} id="check" />
            <label className="chat-btn" htmlFor="check">
                <i class="bi bi-chat-dots comment"></i>
                <i class="bi bi-x-circle close"></i>
            </label>
            <div className="chat-wrapper">
                <div className="chat-header">
                    <h6>Let's Chat - Online</h6>
                </div>
                <div className="chat-form">
                    <div className="chat-msg">
                        <p><b>You:</b> Hello!!</p>
                        <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                            <b>Support Team: </b>No admin available!
                        </p>
                    </div>
                    <textarea id="client" className="form-control" placeholder="your text message"></textarea>
                    <Button variant="success" className="btn btn-success btn-block">Submit</Button>{' '}
                </div>
            </div>
        </>
    );
};
export default UserChatComponent;