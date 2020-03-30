10.times do
  Song.create(
    title: Faker::Hipster.sentence(word_count: 3),
    artist_name: Faker::Team.name,
    artwork: Faker::Placeholdit.image(size: "50x50")
  )
end
