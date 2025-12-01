const getData = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGU4YzlkMTQ2YTU0ODhmNmM5YWNkYTE4YzcwOWU3YyIsIm5iZiI6MTc2MzUyMzg1Ni42NzkwMDAxLCJzdWIiOiI2OTFkM2QxMDVkMGZiNWI3OTBjMmE3ZmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._uPWnETizEpFw5e2ps7JH3wKNlDRqo0rFLCWVC46iJQ",
        accept: "application/json",
      },
    }
  );
  console.log(response);
};

getData();
