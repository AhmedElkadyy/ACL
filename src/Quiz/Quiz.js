
import "./Quiz.css";
function Quiz(){
    return(
        <div className="Quiz"  >
            <div className="Q1" >
                

<h2>Q1:</h2>

<input type="radio" name="contact" value="email" id="email" />
<label for="email"> Answer1</label>

<input type="radio" name="contact" value="phone" id="phone"/>
<label for="phone"> Answer2</label>

<input type="radio" name="contact" value="message" id="message"/>
<label for="message">Answer3</label>


<input type="radio" name="contact" value="message" id="message"/>
<label for="message">Answer4</label>

<br></br>

</div>

<div className="Q2" >
                

                <h2>Q2:</h2>
                
                <input type="radio" name="contact2" value="email" id="email" />
                <label for="email"> Answer1</label>
                
                <input type="radio" name="contact2" value="phone" id="phone"/>
                <label for="phone"> Answer2</label>
                
                <input type="radio" name="contact2" value="message" id="message"/>
                <label for="message">Answer3</label>
                
                
                <input type="radio" name="contact2" value="message" id="message"/>
                <label for="message">Answer4</label>
                
                <br></br>
                
                </div>
 </div>

        

        

    );
}
export default Quiz ;