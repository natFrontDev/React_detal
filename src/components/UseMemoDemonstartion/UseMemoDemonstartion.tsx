import React, {useCallback, useMemo, useState} from "react";



let Users = (props:{users:Array<string>, addUsers:()=>void}) => {
    console.log("RENDERING USERS")

    return <div>
        <button onClick={props.addUsers}> Add user</button>
        {props.users.map( i => <div>{i}</div>)}
    </div>
}

const UsersContainer = React.memo(Users)


export const UseMemoDemonstartion = () => {

    let [count, setCount] = useState<number>(1)
    let [users, setUsers] = useState(["Olga", "Dev", "Chak", "Sonya"])

    // const newArray = users.filter( i => i.toLowerCase().indexOf("a") > -1 )

    // так перериросвка компоненты Users происходит всегда, при изменении любого стейта родительской
    // компоненты UseMemoDemonstartion, не смотря на React.memo,
    // так как .filter всегда возвращает новый массив (хотя зрительно список имен остается один и тот же).
    // Чтобы этого не происходило - используем useMemo на конкретную функцию.
    //  Так мы указываемя, что если users не меняются, то и выполнять функцию filter снова не нужно.
    // А значит - новый масиив не образуется, и React.memo защищает  перерисовывку компоненты "Users"

    const newArray = useMemo(() => {
        return (users.filter( i => i.toLowerCase().indexOf("a") > -1 ))}, [users] )

    // меняем users, так useMemo видит, что users поменялся и функция фильтр отрабатывает => компонента
    // Users перерисовывается



    const addUsers = useCallback(() => {
            setUsers ([...users, "Sveta"])}, [users]
    )

 // useCallback - частный случай useMemo, используется когда передаем callback-функцию в дочернюю компоненту
 //обернутую в реакт.Memo: если данные приходящие в функцию не меняются, дочерняя компонента
    // не перерисовывается. Иначе функция бы считалась новой функцией (т.к. две функции никогда не
    // равны друг другу)и вызывалась бы по новой каждый раз при измненении  стейта
    // и выззывала перерисовку дочерней компоненты.


    return (
        <div style={{marginTop: "50px"}}>
            <button onClick={() => {
                setCount(count + 1)
            }}>Count
            </button>
            <div>{count}</div>
            <UsersContainer users={newArray} addUsers={addUsers}/>
            {/*<UsersContainer users = {users}/>*/}
            {/*//Оборачиваем Users в контейнерную компоненту UsersContainer с помощью реактМемо, теперь если стейт users не*/}
            {/*// поменяется, а поменяется, например, только стейт Count (при нажатиии конопки счетчик увеличивается*/}
            {/*// на +1),*/}
            {/*// то компонента Users перерисовываться не будет. Однако!! это не защищает от случаев когда в*/}
            {/*// родительской  компоненте (UseMemoDemonstartion) стейт users меняется за счет постоянного*/}
            {/*// срабатывания метода .filter, .map и пр., т.е. тех которые возвращают новый массив.*/}
            {/*// А новый массив = перерисовка, даже если фильтрация не меняется*/}
        </div>
    )
}





