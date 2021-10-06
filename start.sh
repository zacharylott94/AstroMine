code .
tmux new-session -d tsc --watch
tmux split-window -h npm run test
tmux split-pane -h http-server -o="/asteroids" ..
tmux select-layout even-horizontal
tmux attach-session
