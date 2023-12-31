import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import moment from 'moment'
import copy from 'copy-to-clipboard'

import upVote from '../../assets/sort-up.svg'
import downVote from '../../assets/sort-down.svg'
import './Questions.css'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { postAnswer } from '../../actions/question'
import { deleteQuestion,voteQuestion } from '../../actions/question'

const QuestionDetails = () => {

    const {id} = useParams();

    const questionsList = useSelector((state) => state.questionsReducer)
    // var questionList = [{
    //     _id:'1',
    //     upVotes:3,
    //     downVotes:2,
    //     noOfAnswers:2,
    //     questionTitle:'what is arrow function ?',
    //     questionBody:'hello function',
    //     questionTags:["C++","java","javascript","ReactJS"],
    //     askedOn:"2 hours ago",
    //     userPosted:'Prithvi',
    //     userId:1,
    //     answer:[{
    //         answeredOn: "16 Mar",
    //         userAnswered:"rge",
    //         answerBody:'answer',
    //         userId:2
    //     }]
        
    //   },
    //   {
    //     _id:'2',
    //     upVotes:5,
    //     downVotes:1,
    //     noOfAnswers:5,
    //     questionTitle:'use of back ticks ?',
    //     questionTags:["C++","java","javascript","React JS","node"],
    //     askedOn:"2 months ago",
    //     userPosted:'Priyam',
    //     userId:2,
    //     answer:[{
    //         answeredOn: "16 aug",
    //         userAnswered:"fdgge",
    //         answerBody:'answer',
    //         userId:2
    //     }]
    //   }
    // ]
    const [Answer, setAnswer] = useState("");
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const User = useSelector((state) => state.currentUserReducer);
    const location = useLocation();
    //console.log(location);
    const url = "http://localhost:3000";

    const handlePostAns = (e, answerLength) => {
        e.preventDefault();
        if (User === null) {
            alert("Login or Signup to answer a question");
            Navigate("/Auth");
        } 
        else {
            if (Answer === "") {
              alert("Enter an answer before submitting");
            } else {
              dispatch(postAnswer({id,noOfAnswers: answerLength + 1,answerBody: Answer,userAnswered: User.result.name,userId: User.result._id}));
            }
        }
    }

    const handleShare = () => {
        copy(url + location.pathname)
        alert('copied url : '+url+location.pathname)
    }

    const handleDelete = () => {
        dispatch(deleteQuestion(id,Navigate))
    }

    const handleUpVote = () => {
        dispatch(voteQuestion(id,'upVote', User.result._id))
    }

    const handleDownVote = () => {
        dispatch(voteQuestion(id,'downVote', User.result._id))
    }

  return (
    <div className='question-details-page'>

        {
            questionsList.data === null ? 
            <h1>Loading...</h1>:
            <>
                {
                    questionsList.data.filter((question) => question._id === id).map((question)=>(
                        <div key={question._id}>
                            <section className='question-details-container'>
                                <h1>{question.questionTitle}</h1>
                                <div className="question-details-container-2">
                                    <div className="question-votes">
                                        <img src={upVote} alt="upvotes" width='18' className='votes-icon' onClick={handleUpVote}/>
                                        <p>{question.upVote.length - question.downVote.length}</p>
                                        <img src={downVote} alt="downvotes" width='18' className='votes-icon' onClick={handleDownVote}/>
                                    </div>
                                    <div style={{width:"100%"}}>
                                        <p className="question-body">{question.questionBody}</p>
                                        <div className="question-details-tags">
                                            {question.questionTags.map((tag,index) => (
                                            <p key={index}>{tag}</p>
                                            ))}
                                        </div>
                                        <div className="question-actions-user">
                                            <div>
                                                <button type='button' onClick={handleShare}>Share</button>
                                                {
                                                    User?.result?._id === question?.userId && (
                                                        <button type='button' onClick={handleDelete}>Delete</button>
                                                    )
                                                }
                                            </div>
                                            <div>
                                                <p>asked {moment(question.askedOn).fromNow()}</p>
                                                <Link to={`/Users/${question.userId}`} className='user-link' style={{color:"#0086d8"}}>
                                                    <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                    <div>
                                                        {question.userPosted}
                                                    </div>
                                                </Link>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {
                                question.noOfAnswers !== 0 && (
                                    <section>
                                        <h3>{question.noOfAnswers} answers</h3>
                                        <DisplayAnswer key = {question._id} question={question} handleShare={handleShare}/>
                                    </section>
                                )
                            }
                            <section className='post-ans-container'>
                                <h3>Your answer</h3>
                                <form onSubmit={(e) => {handlePostAns(e, question.answer.length)}}>
                                    <textarea name="" id="" cols="30" rows="10" onChange={(e) => setAnswer(e.target.value)}></textarea> <br />
                                    <input type="submit" className="post-ans-btn" value="Post Your Answer"/>
                                </form>
                                <p>
                                    Browse other Question tagged
                                    {question.questionTags.map((tag) => (
                                    <Link to="/Tags" key={tag} className="ans-tags">
                                        {" "}
                                        {tag}{" "}
                                    </Link>
                                    ))}{" "}
                                    or
                                    <Link to="/AskQuestion" style={{ textDecoration: "none", color: "#009dff" }}>{" "} ask your own question.</Link>
                                </p>
                            </section>
                        </div>
                    ))
                }
            </>
            

        }
    </div>
  )
}

export default QuestionDetails