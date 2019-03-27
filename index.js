module.exports = (req, res) => {
    res.writeHead(302, {
      'Location': 'https://www.youtube.com/watch?v=fiBLgEx6svA&feature=youtu.be&t=152'
    })
    res.end()
  }