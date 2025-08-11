import { useState } from "react"
import { useFormik } from "formik"

 const validate = values => {
   const errors = {};
   if (!values.userName) {
     errors.userName = 'Username is Required';
   } 
   return errors;
 };

export default function CommentForm({addNewComment}){
    // let [formData,setFormData]=useState({
    //     userName:"",
    //     review:"",
    //     rating:3
    // })
    const formik = useFormik({
     initialValues: {
       userName: '',
       review: '',
       rating: 3,
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

    // let handleInput=(event)=>{
    //     setFormData((currData)=>{
    //         return{...currData,[event.target.name]: event.target.value}
    //     })
    // }
    // let handleSubmit=(event)=>{
    //     console.log(formData);
    //     addNewComment(formData)
    //     event.preventDefault()
    //     setFormData({
    //      userName:"",
    //     review:"",
    //     rating:3
    //     })
    // }


return (
    <div>
    <h2>Leave Your Review</h2>
        <form action="#" onSubmit={formik.handleSubmit}>
            <label htmlFor="userName">Enter Your Name: </label>
            <input type="text" id="userName" name="userName"
             value={formik.values.userName} onChange={formik.handleChange}/><br /> <br />
              {formik.errors.userName ? <div>{formik.errors.userName}</div> : null} 

            <textarea name="review" id="review" onChange={formik.handleChange} 
            value={formik.values.review} placeholder="Write Your Review Here" ></textarea> <br />

            <label htmlFor="rating"  style={{marginRight:"10px"}}  >Rate betwee 1 to 5</label> 
            <input type="number" id="rating" onChange={formik.handleChange}
             name="rating" value={formik.values.rating} min={1} max={5}/>
            <br /> <br />
            <button type="submit">Submit</button>
        </form>        
    </div>
)
}