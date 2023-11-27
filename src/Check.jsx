import React from 'react'

const Check = () => {
    const [termos, setTermos] = React.useState(false)

  return <form>
    <label htmlFor="">
    <input type="checkbox"
    value="Termos"
    checked={termos}
    onChange={({target}) => setTermos(target.checked)}/>
    Aceito os termos
    {termos && <p>Aceitou os termos</p>}
    </label> 


  </form>
}

export default Check
