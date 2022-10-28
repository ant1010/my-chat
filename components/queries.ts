export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      imageUri
      status
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          chatRoom {
            id
            chatRoomUsers {
              items {
                user {
                  id
                  name
                  imageUri
                  status
                }
              }
            }
            lastMessage{
              id
              content
              updatedAt
              user{
                id
                name
              }
            }
        }
        }
        nextToken
      }
      createdAt
      updatedAt
      eventUser {
      items {
        id
        eventRoomID
        eventRoom {
          events {
            items {
              content
              createdAt
              eventLocation
              title
              eventTime
              updatedAt
              userID
            }
          }
          eventUsers {
            items {
              user {
                name
                imageUri
                id
                status
              }
            }
          }
        }
      }
    }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        imageUri
        id
        status
       
      }
     
    }
  }
`;