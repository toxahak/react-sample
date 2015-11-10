comments = [
  {author: "Pete Hunt", text: "This is **one** comment"},
  {author: "Jordan Walke", text: "This is *another* comment"},
  {author: "John Doe", text: "3rd comment"}
]

comments.each do |comment|
  Comment.create!(comment)
end
