// backend/Controller/notificationController.js
import mongoose from 'mongoose';
import SubscribedDiscussions from '../Models/subscribedDiscussions.js';

export const getSubscribedDiscussions = async (req, res) => {
  try {
    const { user_id } = req.params; // e.g., "67f1333e490eb6509094292c"
    console.log('Fetching subscribed discussions for user:', user_id);

    // Convert string user_id to ObjectId
    const userIdAsObjectId = new mongoose.Types.ObjectId(user_id);

    // Find the subscribed discussions for the given user_id
    const subscribed = await SubscribedDiscussions.findOne({ user_id: userIdAsObjectId })
      .populate('discussion_ids.discussion_id');

    if (!subscribed) {
      return res.status(404).json({ message: 'No subscribed discussions found for this user.' });
    }

    // Extract discussion IDs, ensuring null safety
    const discussionIds = subscribed.discussion_ids
      .filter(item => item.discussion_id !== null && item.discussion_id !== undefined) // Handle invalid refs
      .map(item => item.discussion_id._id.toString()); // Convert ObjectId to string

    // Return the discussion IDs
    res.status(200).json({ discussionIds });
  } catch (error) {
    console.error('Error fetching subscribed discussions:', error);
    res.status(500).json({ message: 'Internal server error.', error: error.message });
  }
};