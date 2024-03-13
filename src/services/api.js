const mockPosts = [
  { 
    id: 1, 
    userName: 'Alice', 
    title: 'Check out this article!', 
    body: 'Here is a link to an interesting article: <a href="https://nohello.net/en/">Click here</a>' 
  },
  { 
    id: 2, 
    userName: 'Bob', 
    title: 'Awesome picture!', 
    body: '<img src="https://picsum.photos/id/237/100/200" alt="Image">' 
  },
  { 
    id: 3, 
    userName: 'Charlie', 
    title: 'Long post ahead', 
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum ante at sem vulputate, a dapibus tortor accumsan. Vestibulum at dui rutrum, egestas purus vel, posuere magna. <a href="https://example.com">Link</a> Ut tempor, purus sit amet posuere ultricies, ligula velit rutrum odio, nec ultricies elit ante ut magna.' 
  }
];



const mockUserProfileData = {
  "name": "John Doe",
  "profileImage": "https://picsum.photos/id/237/100/200",
  "email": "john.doe@example.com",
  "age": 30,
  "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor semper nulla, at auctor ipsum accumsan sed. Nullam vehicula varius urna, in vulputate nisi consectetur in."
};

export const getPosts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: mockPosts,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
      });
    }, 1000);
  });
};

export const getUserProfileData = async () => {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: mockUserProfileData,
          status: 200,
          statusText: 'OK',
          headers: {},
          config: {},
        });
      }, 1000);
    });
  } catch (error) {
    console.error('Error fetching user profile data:', error.message);
    throw error;
  }
};
