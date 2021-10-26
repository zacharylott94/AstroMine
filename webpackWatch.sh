while inotifywait -qre modify ./src/
  do npx webpack; 
  done;
