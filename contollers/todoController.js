import todo from "../moedels/todoModel.js";


export const addTodo = async (req,res) => {

    try {
        const newTodo = await todo.create({
            data: req.body.data,
            createdAt: Date.now(),
        })

        await newTodo.save();

        return res.status(200).json(newTodo);
    } catch(err){
       
        return res.status(500).json(err.message);
            
    }

}


export const getAllTodos = async (req,res) => {

    try {
       const data = await todo.find({}).sort({'createdAt': -1});

        return res.status(200).json(data);

    }catch(err){
        return res.status(404).json(err.message);       
    }
    
}


export const toggleDoneTodo = async (req,res) => {

    try {
       const toggleRef = await todo.findById(req.params.id);
        
       const toggleTodoDone = await todo.findOneAndUpdate(
        {_id: req.params.id},
        {done: !toggleRef.done}
       );
       await toggleTodoDone.save();

        return res.status(200).json(toggleTodoDone);

    }catch(err){
        return res.status(404).json(err.message);       
    }
    
}


export const updatedTodo = async (req,res) => {

    try {
        await todo.findOneAndUpdate(
        {_id: req.params.id},
        {data: req.body.data}
       );
       
        const Todo = await todo.findById(req.params.id)
        return res.status(200).json(Todo);

    }catch(err){
        return res.status(404).json(err.message);       
    }
    
}


export const deleteTodo = async (req,res) => {

    try {
       
        const Todo = await todo.findByIdAndDelete(req.params.id)
        return res.status(200).json(Todo);

    }
    catch(error){
        return res.status(404).json(error.message);       
    }
    
}