import { useState, FormEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase'

import '../styles/question.scss'
import '../styles/room.scss';

type Question = {
  id: string;
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighLighted: boolean;
}

type FirebaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighLighted: boolean;
}>

type RoomParams = {
  id: string;
}

export function Room () {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState('');

  const roomId = params.id;

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', room =>{
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) =>{
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighLighted: value.isHighLighted,
          isAnswered: value.isAnswered,
        }
      })

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    })
  }, [roomId])

  async function handleCreateNewQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === ''){
      return;
    }
  

  if (!user) {
    throw new Error('You must be logged in');
  }

  const question = {
    content: newQuestion,
    author: {
      name: user.name,
      avatar: user.avatar,
    },
    isHighLighted: false,
    isAnswered: false
  };

  await database.ref(`rooms/${roomId}/questions`).push(question);

  setNewQuestion('');
}
  return(
  <div id="page-room">
    <header>
      <div className="content">
        <img src={ logoImg } alt="Logo" />
        <RoomCode code={roomId}/>
      </div>
    </header>

    <main>
      <div className="room-title">
        <h1>Sala {title}</h1>
        { questions.length > 0 && <span>{questions.length} pergunta(s)</span> }
      </div>

      <form onSubmit={handleCreateNewQuestion}>
        <textarea 
        placeholder="O que você quer perguntar?"
        onChange={event => setNewQuestion(event.target.value)}
        value={newQuestion}
        />

        <div className="form-footer">
          { user ? (
            <div className="user-info">
              <img src={user.avatar} alt={user.name} />
              <span>{user.name}</span>
            </div>
          ) : (
            <span>Para enviar uma pergunta, <button> faça o seu login</button>.</span>
          ) }
          <Button disabled={!user} type="submit" >Enviar pergunta</Button>
        </div>
      </form>

      <div className="question-list">
      { questions.map(question => {
        return (
          <Question 
            content={question.content}
            author={question.author}
          />
        );
      }) }
      </div>
    </main>
    </div>
  );
}