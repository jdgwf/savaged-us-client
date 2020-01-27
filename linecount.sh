echo "TS Files:"
find . -type f -name '*.tsx' -not -path "./node_modules/*" | xargs wc -l
echo "TSX Files:"
find . -type f -name '*.ts' -not -path "./node_modules/*" | xargs wc -l

echo "TSX and TS Files:"
find . -type f \( -name "*.tsx" -o -name "*.ts" \) -not -path "./node_modules/*" | xargs wc -l
