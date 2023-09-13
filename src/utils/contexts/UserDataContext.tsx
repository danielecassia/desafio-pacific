import { createContext, useContext, useEffect, useState } from 'react';
import { UserData } from '../types/UserData';


//Tipando as Props do contexto
interface PropsUserContext {
  formList: UserData[];
  addDataToFormList: (newUserData: UserData) => void
}

// criando contexto
const UserDataContext = createContext<PropsUserContext | undefined>(undefined);

type Props = {
  children: React.ReactNode
}

const UserDataProvider: React.FC<Props> = ({ children }) => {
  const [formList, setFormList] = useState([] as UserData[]);

  function addDataToFormList(newUserData: UserData) {
    setFormList([...formList, newUserData])
  }

  // carrega a lista de formulários preenchidos
  useEffect(() => {
    const oldFilledForms = localStorage.getItem('filledForms')
    if (!oldFilledForms) {
      return
    }
    const filledForms = JSON.parse(oldFilledForms);
    if (filledForms) {
      setFormList(filledForms);
    }
  }, [])

  // guarda a lista de formulários preenchidos
  useEffect(() => {
    if (formList.length == 0)
      return
    localStorage.setItem('filledForms', JSON.stringify(formList))
  }, [formList])

  return (
    <UserDataContext.Provider
      value={{
        addDataToFormList,
        formList
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

function useUserData() {
  const context = useContext(UserDataContext);
  if (context === undefined)
    throw new Error("useUserData must be within UserDataProvider")
  return context;
}
export { UserDataProvider, useUserData };



