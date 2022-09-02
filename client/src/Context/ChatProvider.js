import React , { createContext , useContext , useEffect , useState} from 'react';
import { useNavigate} from 'react-router-dom';
import Axios from '../components/SharedComponents/Axios/Axios';

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat , setSelectedChat] = useState();
  const [user,setUser] = useState();
  const [chats,setChats] = useState();
  const [id,setId] = useState();

  const history = useNavigate();

  useEffect(() => {
    if(window.localStorage.getItem('user-id')){
      const userInfo = window.localStorage.getItem('user-id');
      setUser(userInfo);
      if (!userInfo) history.push("/");
      getChats()
    }
  },[history]);
  const getChats = async () => {
    try {
      const response = await Axios.get("/chat", {
        headers: {
          "x-auth-token": window.localStorage.getItem("x-auth-token"),
        },
      });
      setChats(response.data);
    } catch (err) {
      console.log("Error :");
      console.log(err);
    }
  };
  return (
    <ChatContext.Provider 
    value={{
      selectedChat,
      setSelectedChat,
      user,
      setUser,
      chats,
      setChats
    }}
    >
      {children}
    </ChatContext.Provider>
  );
};
export const ChatState = () => {
  return useContext(ChatContext);
};
export default ChatProvider;