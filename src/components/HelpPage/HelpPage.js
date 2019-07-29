import React from 'react';
import './HelpPage.scss';

const HelpPage = () => {
  return (
    <main className="help-page-wrapper">
      <img
        className="help-page-img"
        src="./images/silhouette.jpg"
        alt="black and white photo of rapper on stage"
      />
      <section className="help-page">
        <h2 className="help-page-title">Learn to use Barz</h2>
        <article className="help-page-article">
          <h3>Creating a new lyric</h3>
          <p>
            On the Home page, click the "Create New" button to open a fresh
            canvas for writing new lyrics.
          </p>
          <img src="./images/create-new.gif" />
        </article>
        <article className="help-page-article">
          <h3>Entering a title</h3>
          <p>
            On the Write page, enter a new title in the input box at the top
            then hit return to save the title. To edit a current title, click
            on the title to open the edit field.
          </p>
          <img src="./images/enter-title.gif" />
        </article>
        <article className="help-page-article">
          <h3>Creating a new bar</h3>
          <p>As you are writing in a bar, hit return to create a new bar.</p>
          <img src="./images/create-bar.gif" />
        </article>
        <article className="help-page-article">
          <h3>Getting rhymes for a word</h3>
          <p>
            Double click on a word in any of your bars to bring up its rhyming
            words on the right side.
          </p>
          <img src="./images/highlight-word.gif" />
        </article>
        <article className="help-page-article">
          <h3>Copying a rhyme to your clipboard</h3>
          <p>
            With a word selected, click on any rhyming words on the right to
            automatically copy that word to your clipboard. Then you can hit
            "cmd + v" to paste it into a bar.
          </p>
          <img src="./images/copy-to-clipboard.gif" />
        </article>
        <article className="help-page-article">
          <h3>Deleting an existing bar</h3>
          <p>
            On the Write page, click the "X" button on the right side of any
            bar to permenantly delete it.
          </p>
          <img src="./images/delete-bar.gif" />
        </article>
        <article className="help-page-article">
          <h3>Deleting an existing lyric</h3>
          <p>
            On the Home page, click on the "X" button on any of your saved
            lyrics. This will bring up a confirmation message asking if you'd
            like to permenantly delete that lyric.
          </p>
          <img src="./images/delete-lyric.gif" />
        </article>
      </section>
    </main>
  );
};

export default HelpPage; 