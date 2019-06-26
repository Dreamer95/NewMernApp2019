const color = require('./../models/colorCollection');

exports.create = async(req,res,next)=>{    
    //  const {colorName} = req.body;   
    try {
        console.log(req.body)
        const newColor = new color( req.body);        
        await newColor.save();
        return res.json(newColor) ;
    } catch (error) {
        console.log(error);
    }
}

exports.getAll = async(req,res,next)=>{
    try{
        const colors = await color.find();
        return res.json(colors) 
    } catch (err){
        console.log(err);
    }
    
}

exports.delete = async (req, res, next) => {    
    try {
        const myColor = await color.findById(req.params.id)
        await myColor.remove()
        return res.json({ id: req.params.id })
    } catch (err) {
        console.log(err)
    }
}

exports.put = async (req, res, next )=>{
    try{
        const myColor = await color.findById(req.params.id)
        myColor.colorName = req.body.colorName
        await myColor.save()
        return res.json({color : myColor})        
    } catch (err){
        console.log(err)
    }
}