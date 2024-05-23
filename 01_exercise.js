console.log("This is to get the result of the exercise")

product_info = {
    p_name : "Parker Jotter Standard CT Ball Pen (Black)", 
    p_rating : 4, 
    p_deal_of_day: false,
    p_selling_price : 270,
    p_original_price : 285,
    p_discount : (285 - 270) / (285)
};

console.log(product_info.p_name);
console.log(product_info.p_rating);
console.log(product_info.p_deal_of_day);
console.log(product_info.p_selling_price);
console.log(product_info.p_original_price);
console.log(product_info.p_discount * 100, "%");

console.log(typeof(product_info))

const profile = {
    user_id : "shradhakhapra",
    isFollowed : true,
    message : "Onclick new link",
    post_count : 195,
    followers_count : 569000,
    following_count : 4,
    user_name : "Shradha Khapra", 
    thread_id : "shradhakhapra",
    bio : "Apna College | Ex-Micorsoft, DRDO \nTo educate someone is biggest privillege!"
};

console.log("user_id",profile.user_id);
console.log("isFollowed",profile.isFollowed);
console.log("message",profile.message);
console.log("post_count",profile.post_count);
console.log("followers_count",profile.followers_count);
console.log("following_count",profile.following_count);
console.log("user_name",profile.user_name);
console.log("thread_id",profile.thread_id);
console.log("bio",profile.bio);