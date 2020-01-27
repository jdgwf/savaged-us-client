all:
	@rm -Rf ./public/fonts
	@cp -R ./node_modules/rpg-awesome/fonts ./public
	@npm run build
linecount:
lc:
# @find . -type f \( -name '*.ts' -o -name '*.tsx' \) -prune -not -path "./node_modules/*" | xargs wc -l
	@echo "TS Files:"
	@find . -type f -name '*.tsx' -not -path "./node_modules/*" | xargs wc -l

	@echo "TSX Files:"
	@find . -type f -name '*.ts' -not -path "./node_modules/*" | xargs wc -l

	@echo "TSX and TS Files:"
	@find . -type f \( -name "*.tsx" -o -name "*.ts" \) -not -path "./node_modules/*" | xargs wc -l
build:
	npm run build

convert:
	@node bin/convert-v1-data-to-v2.js

clean:
	rm -f bin/*.js

kill:
# Found during development that the npm run dev won't kill the nodemon or server.js processes sometimes.. this is an easy kill solution
	-@pkill -f bin/server.js
	-@pkill -f nodemon