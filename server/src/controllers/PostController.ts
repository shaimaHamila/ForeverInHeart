import express, { Request, Response } from 'express';
import PostMessage from '../models/PostMessageModel';


export const getPost = async (req: Request, res: Response) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json({
            success: true,
            message: `Fecheed ${postMessages.length} PostMessages`,
            data: postMessages,
        })
    } catch (err) {
        res.status(404).json({ succss: false, message: err })
    }
}

export const createPost = async (req: Request, res: Response) => {
    const post = req.body
    let newPost;
    try {
        newPost = new PostMessage(post);
        newPost = await newPost.save();
        res.status(201).json({
            success: true,
            message: "new post created succesffully",
            data: newPost
        })
    } catch (err) {
        res.status(409).json({
            success: false, message: err
        })
    }
}