import './Style.css'
import styles from './Style.module.css'; 
import './StyleSass.scss';


function Style() {
    return (
        <div>
            <h3>Estilo embutido</h3>
            <h3 style={{ color: "purple", backgroundColor: "lightblue" }}>Olá Estilo!</h3>
            
            {/* Em JSX, as expressões JavaScript são escritas entre chaves e, como os objetos JavaScript também usam chaves, o estilo no exemplo acima é escrito entre dois conjuntos de chaves {{}}. */}
            {/* Como o CSS embutido é escrito em um objeto JavaScript, as propriedades com separadores de hífen, como background-color, devem ser escritas com a sintaxe camel case: [Usar backgroundColor em vez de background-color] */}

            <h3>Estilo Externo</h3>
            <h3 className='estilo'>Olá, Estilo!</h3>

            <h3>Modules CSS</h3>
            <h3 className={styles.bigblue}>Olá, Estilo!</h3>
            {/* className = Classe em HTML */}

            <h3>Sass em React</h3>
            <h3 className='vermelhoSass'>Olá, Estilo!</h3>
        </div>
    )
}

export default Style