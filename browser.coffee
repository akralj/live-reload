reconnect = require('reconnect/shoe')

LiveReloadClient = (uri) ->
  if typeof uri == 'number'
    loc = window.location
    host = if window.location?.hostname then "#{loc.protocol}//#{loc.hostname}"
    else 'http://localhost'

    uri =  "#{host}:#{uri}"
  reconnect((stream) ->
    stream.on 'data', ondata
    return
  ).connect uri + '/shoe'
  return

ondata = (data) ->
  if data == 'reload'
    document.location.reload()
  return

module.exports = LiveReloadClient
