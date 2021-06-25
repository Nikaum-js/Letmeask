import { Link, useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';
import { database } from '../services/firebase';

export function NewRoom () {
    const { user } = useAuth();
    const [newRoom, setNewRoom] = useState('');
    const history = useHistory()

    async function handleCreateRoom(event: FormEvent) {
      event.preventDefault();

      if (newRoom.trim() === ''){
        return;
      }

      const roomRef = database.ref('rooms');

      const firebaseRoom = await roomRef.push({
        title: newRoom,
        authId: user?.id,
        auth: user?.name,
      });

      history.push(`/rooms/${firebaseRoom.key}`)
    }

return(  
    <div id="page-auth">
      <aside>
        <img src={ illustrationImg } alt="Imagem de ilustração" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as suas dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={ logoImg } alt="Logo do site" />
          <h2>Criar uma nova sala </h2>
          <form onSubmit={handleCreateRoom}>
            <input 
              type="text" 
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Criar a sala
            </Button>
          </form>
          <p>
            Quer entrar em alguma sala existente? <Link to="/">Clique Aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}