import fetchData from './http';

export default function getLevel(userId) {
    const response = fetchData(`https://server:8080/user/${userId}`);
    
    // TODO: логика обработки
    if (response.status === 'ok') {
       return `Ваш текущий уровень: ${response.level}`; 
    }
    return `Информация об уровне временно недоступна`;
  }
