export const useSession = () => ({
  data: {
    user: {
      name: "Maria",
    },
  },
});

export const signOut = () => {
  console.log("Mock signOut called");
};
