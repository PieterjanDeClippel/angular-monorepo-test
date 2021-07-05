# MintplayerNgYoutubePlayer

This is a failed attempt of setting up an angular workspace as a monorepo,
containing multiple libraries (-> packages) and a test application.

## Goal

The goal is to transform [this project](https://github.com/MintPlayer/mintplayer-ng-youtube-player) into a monorepo with 2 libraries:
- 1 for the `YoutubeApiService`, which loads the youtube-iframe-api script in the DOM
- 1 for the `YoutubePlayerComponent`

Then I can create a `VideoPlayerComponent` using the `YoutubeApiService`, `DailymotionApiService` and `VimeoApiService`.

## Test

To replicate the issue, run the following commands to clone and build the repository:

    git clone https://github.com/PieterjanDeClippel/angular-monorepo-test
    cd angular-monorepo-test
    ng build @mintplayer/ng-youtube-api
    ng build @mintplayer/ng-youtube-player
    ng build ng-youtube-player-demo

    # All projects compile successfully
    # Now go to the NgYoutubePlayerComponent and uncomment the injection parameter in the constructor (line 16)

    ng build @mintplayer/ng-youtube-player

The build fails with the following error:

    error TS6059: File 'C:/Users/user/source/repos/Tmp/mintplayer-ng-youtube-player/projects/mintplayer/ng-youtube-api/src/lib/ng-youtube-api.service.ngtypecheck.ts' is not under 'rootDir' 'C:\Users\user\source\repos\Tmp\mintplayer-ng-youtube-player\projects\mintplayer\ng-youtube-player\src'.
    'rootDir' is expected to contain all source files.

Claiming that the `NgYoutubeApiService` should also be inside the `ng-youtube-player` library project (which off course is BS).

So from the moment you're trying to inject a service from one library into a component from another library, the build is broken.