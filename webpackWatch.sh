while inotifywait -qe modify ./src/ > /dev/null 
  do npx webpack; 
  done;
